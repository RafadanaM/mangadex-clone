interface ITooltip {
  text: string;
}

const Tooltip = ({ text }: ITooltip) => {
  return (
    <div className="absolute z-20 w-max -left-20 top-1/2 invisible opacity-0 bg-black bg-opacity-90 text-white text-sm font-medium rounded p-1 transition-all ease-in group-hover:visible group-hover:opacity-100 group-hover:top-[calc(100%_+_0.5rem)]">
      {text}
    </div>
  );
};

export default Tooltip;
