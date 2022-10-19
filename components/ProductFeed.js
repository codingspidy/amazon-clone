import Product from "./Product";

function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52">
      {products.slice(0, 4).map((product) => {
        return (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            rating={product.rating.rate}
            image={product.image}
            category={product.category}
            price={product.price}
            description={product.description}
          />
        );
      })}
      <img className="md:col-span-full" src="https://links.papareact.com/dyz" />
      <div className="md:col-span-2">
        {products.slice(4, 5).map((product) => {
          return (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              rating={product.rating.rate}
              image={product.image}
              category={product.category}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </div>
      {products.slice(4, 5).map((product) => {
        return (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            rating={product.rating.rate}
            image={product.image}
            category={product.category}
            price={product.price}
            description={product.description}
          />
        );
      })}
      
      {products.slice(5, products.length).map((product) => {
          return (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              rating={product.rating.rate}
              image={product.image}
              category={product.category}
              price={product.price}
              description={product.description}
            />
          );
        })}
    </div>
  );
}

export default ProductFeed;
