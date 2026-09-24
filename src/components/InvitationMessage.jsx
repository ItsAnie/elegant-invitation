import heartDivider from "../assets/heart_divider.jpg"
import engangement from "../assets/engangement.jpg"

const InvitationMessage = () => {
  return (
    <div>
      <div className="w-[250px] mx-auto bg-white flex flex-col gap-[10px] items-center p-[20px] rounded-lg">
            <img alt="Wedding image" src={engangement} className="rounded-lg" />
            <p className="max-w-[150px] text-center text-xl font-serif italic">Save The Date 20.05.2027</p>
        </div>
    <section className="text-center px-6 mt-[40px]">
        
      <h2 className="mb-4 text-[28px] font-armenian uppercase tracking-[0.25em] text-[#555846]">
        Սիրելի՛ հյուրեր
      </h2>

      <p className="mx-auto max-w-xl text-base leading-8 text-[#6f7065]">
        Մենք ցանկանում ենք կիսել այս գեղեցիկ օրը ձեզ հետ:
        Մեր կյանքի ամենագեղեցիկ էջերից մեկը շուտով կսկսվի։
        Սիրով հրավիրում ենք ձեզ ներկա գտնվելու մեր հարսանյաց
        արարողությանը և միասին նշելու մեր սիրո ու նոր կյանքի սկիզբը։
      </p>

      <p className="mt-8 text-xl font-light font-armenian text-[#555846]">
        Սիրով՝ Մարի & Արման
      </p>
    </section>
    <img alt="Heart divider" src={heartDivider} />
</div>
  );
};

export default InvitationMessage;