import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import { useContext } from "react";
import { CardContext } from "../Context/CardContext";

function CardLayout() {
  const cardInformation = "http://localhost:1111/card";
  const [getCard, setCard] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const context = useContext(CardContext);

  // Fetch cards from the API
  async function getCards() {
    try {
      const result = await axios.get(cardInformation);
      setCard(result.data);
      setFilteredCards(result.data);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  }

  // Filter cards by price range
  function filterByRange(cards, min, max) {
    return cards.filter((card) => card.price >= min && card.price <= max);
  }

  // Filter cards by category
  function filterByCategory(cards, category) {
    return cards.filter((card) => card.category === category);
  }

  // Sort cards by price
  function sortCards(cards, order) {
    return cards.sort((a, b) => {
      if (order === 'Menor precio') {
        return a.price - b.price;
      } else if (order === 'Mayor precio') {
        return b.price - a.price;
      } else {
        return 0;
      }
    });
  }

  // Filter cards by availability
  function filterByAvailability(cards, availability) {
    if (availability === "Disponible") {
      return cards.filter((card) => card.inStock === true);
    } else if (availability === "No disponible") {
      return cards.filter((card) => card.inStock === false);
    } else {
      return cards; // "Todos" or any other value
    }
  }

  // Apply filters and sorting
  useEffect(() => {
    async function applyFiltersAndSort() {
      if (getCard.length === 0) {
        await getCards();
      }
      
      let result = [...getCard];

      if (context.rangePrice) {
        const priceRanges = {
          '': [0, Infinity],
          "$10 - $50": [10, 50],
          "$51 - $100": [51, 100],
          "$101 - $200": [101, 200],
          "mayor a $200": [200, Infinity]
        };
        const [minPrice, maxPrice] = priceRanges[context.rangePrice] || [0, Infinity];
        result = filterByRange(result, minPrice, maxPrice);
      }

      if (context.category) {
        result = filterByCategory(result, context.category);
      }

      if (context.sortOrder) {
        result = sortCards(result, context.sortOrder);
      }

      if (context.isAvailable !== null) {
        result = filterByAvailability(result, context.isAvailable);
      }

      setFilteredCards(result);
    }

    applyFiltersAndSort();
  }, [context.rangePrice, context.category, context.sortOrder, context.isAvailable, getCard]);

  return (
    <div className="p-4 mt-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {filteredCards.map((card) => (
          <Card key={card.id} cardData={card} />
        ))}
      </div>
    </div>
  );
}

export default CardLayout;
