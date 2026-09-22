
export default function Instagram() {
  return (
    <section className="bg-[#e4e6df]">

      <div className="px-7 py-14 sm:px-12 sm:py-16 flex flex-col justify-center items-center">

        <h2 className="font-serif text-3xl italic text-[#555846] sm:text-4xl">
          Dress Code
        </h2>

        <p className="mx-auto mt-4 max-w-md leading-6 text-[#77776c] text-center">
          Մեզ համար ամենակարևորը ձեր ներկայությունն է,
          և մենք ուրախ կլինենք տեսնել ձեզ այն ոճով,
          որում ձեզ ամենահարմարն ու գեղեցիկն եք զգում։

          Իսկ եթե դժվարանում եք ընտրել ձեր հագուստի երանգը,
          առաջարկում ենք մի քանի նուրբ գույներ,
          որոնք ներդաշնակ են մեր հարսանիքի դետալներին
          և կօգնեն պահպանել օրվա միասնական ու գեղեցիկ տրամադրությունը։
        </p> 

        <div className="mt-[16px] flex flex-col gap-[25px]">
          <div className="mt-[20px] items-center flex flex-col gap-[15px] italic uppercase">
            <p className="underline">Նուրբ Երանգներ</p>
            <div className="flex gap-[25px]">
              <div className="bg-[#E8DDC8] rounded-full w-[50px] h-[50px]"></div>
              <div className="bg-[#D8C8B5] rounded-full w-[50px] h-[50px]"></div>
              <div className="bg-[#CBBBA5] rounded-full w-[50px] h-[50px]"></div>
            </div>
          </div>

          <div className="mt-[20px] items-center flex flex-col gap-[15px] italic uppercase">
            <p className="underline">Նեյտրալ Երանգներ</p>
            <div className="flex gap-[25px]">
              <div className="bg-[#A99B8B] rounded-full w-[50px] h-[50px]"></div>
              <div className="bg-[#796B5D] rounded-full w-[50px] h-[50px]"></div>
              <div className="bg-[#000000] rounded-full w-[50px] h-[50px]"></div>
            </div>
          </div>

          <div className="mt-[20px] items-center flex flex-col gap-[15px] italic uppercase">
            <p className="underline">Ակցենտավորված Երանգներ</p>
            <div className="flex gap-[25px]">
              <div className="bg-[#A8B09A] rounded-full w-[50px] h-[50px]"></div>
              <div className="bg-[#555846] rounded-full w-[50px] h-[50px]"></div>
              <div className="bg-[#722F37] rounded-full w-[50px] h-[50px]"></div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}