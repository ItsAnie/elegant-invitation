
export default function Instagram() {
  return (
    <section className="bg-[#e4e6df]">

      <div className="px-7 py-14 sm:px-12 sm:py-16 flex flex-col justify-center items-center">

        <h2 className="font-serif text-[28px] italic text-[#555846]">
          Dress Code
        </h2>

        <p className="mx-auto mt-4 max-w-md leading-6 text-[#77776c] text-center">
          Մեզ համար ամենակարևորը ձեր ներկայությունն է։ 
          Եկեք այն ոճով, որում ձեզ ամենահարմարն ու գեղեցիկն եք զգում։ 
          Իսկ եթե դժվարանում եք ընտրել երանգը, առաջարկում ենք մի քանի նուրբ գույներ՝ 
          հարսանիքի միասնական տրամադրությանը ներդաշնակ։
        </p> 

        <div className="mt-[18px] flex flex-col gap-[15px] text-center">
            <p className="underline text-[20px]">Երանգներ</p>
            <div className="flex gap-[25px]">
              <div className="bg-[#E8DDC8] rounded-full w-[50px] h-[50px]"></div>
              <div className="bg-[#D8C8B5] rounded-full w-[50px] h-[50px]"></div>
              <div className="bg-[#CBBBA5] rounded-full w-[50px] h-[50px]"></div>
            </div>

            <div className="flex gap-[25px]">
              <div className="bg-[#A99B8B] rounded-full w-[50px] h-[50px]"></div>
              <div className="bg-[#796B5D] rounded-full w-[50px] h-[50px]"></div>
              <div className="bg-[#000000] rounded-full w-[50px] h-[50px]"></div>
            </div>

            <div className="flex gap-[25px]">
              <div className="bg-[#A8B09A] rounded-full w-[50px] h-[50px]"></div>
              <div className="bg-[#555846] rounded-full w-[50px] h-[50px]"></div>
              <div className="bg-[#722F37] rounded-full w-[50px] h-[50px]"></div>
            </div>
        </div>

      </div>

    </section>
  );
}