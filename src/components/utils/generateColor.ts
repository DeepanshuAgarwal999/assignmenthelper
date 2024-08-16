export const generateColor = (length:number) => {
  const colors: string[] = [
    "#A3E4D7",
    "#9B59B6",
    "#F1C40F",
    "#2ECC71",
    "#E67E22",
    "#1ABC9C",
    "#34495E",
    "#16A085",
    "#E74C3C",
    "#2980B9",
    "#3498DB",
  ];
  return colors[length % 10];
};
