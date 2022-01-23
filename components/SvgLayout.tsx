export default function SvgLayout({ children }: any) {
  return (
    <div className="h-[20rem] bg-black px-5 mx-3 flex flex-col rounded-xl my-4  justify-center items-center ">
      {children}
    </div>
  );
}
