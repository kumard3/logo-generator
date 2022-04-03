export default function Container({ children }: any) {
  return (
    <div className=" bg-[#1a1a1a] flex flex-wrap sm:flex-nowrap  max-w-2xl justify-center rounded-xl p-2 items-center  mx-2 sm:p-0 ">
      {children}
    </div>
  );
}
