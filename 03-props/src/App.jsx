import Card from "./components/card.jsx"

const App = () => {
  return (
    <div className="main-container">
      <Card user='Minhaj' img='https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=' />
      <Card user='Raisul' img='https://www.shutterstock.com/image-photo/traveler-woman-arms-raised-triumph-260nw-2457990309.jpg' />
      <Card user='Sijan' img='https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg' />
      <Card user='Lakib' img='https://static.vecteezy.com/system/resources/thumbnails/083/933/835/small/beautiful-and-inspiring-picture-detailing-a-bright-hot-air-balloon-over-river-pure-cozy-perfect-for-creatives-moods-stock-image-free-photo.jpeg' />
      <Card user='Jisan' img='https://static.vecteezy.com/system/resources/thumbnails/031/549/388/small_2x/hot-colorful-air-balloon-ride-over-beautiful-grand-canyon-usa-generative-ai-photo.jpeg' />
    </div>
  )
}

export default App