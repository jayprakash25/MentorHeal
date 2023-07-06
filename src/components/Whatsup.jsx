import icon from "../assets/whatsapp.png";
export default function Whatsup() {
  const sendMessage = () => {
    const message = "Hey MenthorThrive";
    const number = 8010923760;
    const url = `https://web.whatsapp.com/send?phone=${number}&text=${message}&app_absent=0`;
    window.open(url);
  };

  return (
    <>
      <div className="flex justify-end mx-8 ">
        <div className="fixed bottom-10 z-50">
          <img src={icon} onClick={sendMessage} className="w-12 h-12 cursor-pointer" alt="" />
        </div>
      </div>
    </>
  );
}
