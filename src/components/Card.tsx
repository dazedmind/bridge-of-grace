export const Card = (props: { title: string, image: string, number: string, description: string }) => {
  return (
    <div className="relative bg-teal rounded-md overflow-hidden w-auto md:w-3/4 h-auto group cursor-default">
      <img
        src={props.image}
        className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-105"
        alt="Bridge of Grace"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-4">
        <p className="text-primary-foreground text-lg font-semibold text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {props.description}
        </p>
      </div>

      {/* Card title */}
      <h1 className="flex items-center text-primary-foreground text-lg p-2 px-4 gap-2 leading-5">
        <span className="text-6xl font-bold">{props.number}</span> {props.title}
      </h1>
    </div>
  );
};
