export function PromoBanners() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
      <a href="#" className="group relative overflow-hidden rounded">
        <img
          src="https://bw-kidxtore.bzotech.com/wp-content/uploads/2023/07/home3-bn5.jpg"
          alt="Save the date — buy and win, 30% off the more you buy the bigger the gift"
          draggable={false}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </a>

      <a href="#" className="group relative overflow-hidden rounded">
        <img
          src="https://bw-kidxtore.bzotech.com/wp-content/uploads/2023/07/home4-bn4.jpg"
          alt="For online order — 30% off, new arrivals just for you"
          draggable={false}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </a>
    </div>
  );
}
