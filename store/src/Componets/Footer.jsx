
function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white py-4 shadow-lg">
      <div className="container mx-auto flex flex-col items-center">
        <div className="text-center mb-2">
          <p className="text-lg font-bold">Andrés Quevedo</p>
          <p className="text-sm">Email: <a href="mailto:anfeldev@gmail.com" className="underline">anfeldev@gmail.com</a></p>
        </div>
        <div className="text-center mt-2">
          <p className="text-xs">2024 Andrés Quevedo. Prueba tecnica.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
