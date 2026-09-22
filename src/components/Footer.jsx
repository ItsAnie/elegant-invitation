export default function Footer() {
  return (
    <footer className="bg-[#555846] text-white w-full flex flex-col items-center py-[20px]">
        <div className="flex justify-center items-center gap-[20px]">
            <div>
                <p>Փեսացու</p>
                <p>Հարսնացու</p>
            </div>
            <div className="w-[1px] h-[40px] bg-white"></div>
            <div className="flex flex-col">
                <a href="tel:044444444" className="cursor-pointer">044 44-44-44</a>
                <a href="tel:095959595" className="cursor-pointer">095 95-95-95</a>
            </div>
        </div>
        <h2 className="font-serif text-xl italic uppercase mt-[20px] max-w-[250px] text-center font-semibold">
            Պատրաստվել է սիրով՝ <a href="instagram" className="cursor-pointer underline">Elaris</a>-ի Կողմից
        </h2>
    </footer>
  );
}