import heartDivider from "../assets/heart_divider.jpg"
import engangement from "../assets/engangement.jpg"

const InvitationMessage = () => {
  return (
    <div>
    <section className="px-6 py-6 text-center">
        <div className="w-[250px] mx-auto bg-white flex flex-col items-center p-[20px] mb-[30px] rounded-lg">
            <img alt="Wedding image" src={engangement} className="rounded-lg" />
            <p className="max-w-[250px] text-center text-3xl font-serif italic">Save The Date <b>25.05.2027</b></p>
        </div>
      <h2 className="mb-4 text-2xl font-serif italic uppercase tracking-[0.25em] text-[#555846]">
        Սիրելի՛ հյուրեր
      </h2>

      <p className="mx-auto max-w-xl text-base leading-8 text-[#6f7065]">
        Մենք ցանկանում ենք կիսել այս գեղեցիկ օրը ձեզ հետ:
        Մեր կյանքի ամենագեղեցիկ էջերից մեկը շուտով կսկսվի։
        Սիրով հրավիրում ենք ձեզ ներկա գտնվելու մեր հարսանյաց
        արարողությանը և միասին նշելու մեր սիրո ու նոր կյանքի սկիզբը։
      </p>

      <p className="mt-8 text-xl font-light italic text-[#555846]">
        Սիրով՝ Մարի & Արամ
      </p>
    </section>
    <img alt="Heart divider" src={heartDivider} />
</div>
  );
};

export default InvitationMessage;