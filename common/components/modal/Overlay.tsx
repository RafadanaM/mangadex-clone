interface IOverlay {
  onOverlayClick: (value: boolean) => void;
  isOpen: boolean;
  openStyle?: string;
}

const Overlay = ({ onOverlayClick, isOpen, openStyle = "" }: IOverlay) => {
  const handleOverlayClick = () => {
    const currOpenState = isOpen;
    onOverlayClick(!currOpenState);
  };

  return (
    <div
      className={`fixed w-full h-full top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 z-30 ${
        isOpen ? `block ${openStyle}` : "hidden"
      }`}
      onClick={isOpen ? handleOverlayClick : undefined}
    ></div>
  );
};

export default Overlay;
