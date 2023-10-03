export default function App() {
  return (
    <>
      <Header />
      <MenuPricing />
      <About />
      <Footer />
    </>
  );
}
function Header() {
  return (
    <main id="main">
      <div className="overlay"></div>
      <div className="container">
        <div>
          <h1>Food that actually tastes Good </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <a href="#menu">Explore Food 🍕</a>
        </div>
        <div className="other">
          <h1>Our Menu</h1>
          <div className="menu">
            <MenuItem src="https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1328&q=80" />
            <MenuItem src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1335&q=80" />
            <MenuItem src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
            <MenuItem src="https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" />
            <MenuItem src="https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1325&q=80" />
          </div>
        </div>
      </div>
    </main>
  );
}
function MenuItem({ src }) {
  return (
    <a href="#menu">
      <img src={src} alt="Image of food" />
    </a>
  );
}
//
function MenuPricing() {
  return (
    <section id="menu">
      <div className="container">
        <h2>Our Menu & Pricing</h2>
        <div className="full-menu">
          <Pricing heading="Food 🍟" pricing="Pricing 💵" />
          <Card
            price="69.99"
            description="Pizza"
            src="https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1328&q=80"
          />
          <Card
            price="69.99"
            description="Pizza"
            src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1335&q=80"
          />
          <Card
            price="69.99"
            description="Pizza"
            src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          />
          <Card
            price="69.99"
            description="Pizza"
            src="https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
          />
          <Card
            price="69.99"
            description="Pizza"
            src="https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1325&q=80"
          />
        </div>
      </div>
    </section>
  );
}
function Pricing({ heading, pricing }) {
  return (
    <div className="card" id="pricing">
      <h3>{heading}</h3>
      <h3 className="pricing">{pricing}</h3>
    </div>
  );
}
function Card({ src, description, price }) {
  return (
    <div className="card">
      <div className="left">
        <img src={src} alt="Food Image" />
        <h4>{description}</h4>
      </div>
      <div className="right">
        <h4>${price}</h4>
      </div>
    </div>
  );
}
function About() {
  return (
    <section id="about">
      <h2>About Us.</h2>
      <div className="container">
        <img
          src="https://images.unsplash.com/photo-1528735000313-039ec3a473b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
          alt="interior"
        />
        <div className="info">
          <h3>Located At the beaches of Asia</h3>
          <p>
            At Beachside Bites, we're all about combining the beauty of Asia's
            beaches with the deliciousness of fast food. Our chefs have
            perfected the art of infusing coastal flavors into every dish,
            ensuring a taste of paradise in every bite. We pride ourselves on
            using the freshest local ingredients, offering a diverse menu that
            caters to all tastes, and providing a relaxing beachfront atmosphere
            where you can enjoy your meal with stunning views. Beachside Bites
            is more than just a restaurant; it's a gathering place for friends,
            families, and food enthusiasts. So come hungry, leave happy, and
            savor the simple joy of life by the beach with Beachside Bites!
          </p>
        </div>
      </div>
    </section>
  );
}
function Footer() {
  return (
    <footer>
      <div className="container">
        <p>This site is made by Abdullah</p>
      </div>
    </footer>
  );
}
