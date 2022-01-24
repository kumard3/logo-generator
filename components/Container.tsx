export default function Container({ children }: any) {
  return (
    <div className=" bg-[#1a1a1a]  flex  flex-wrap justify-center rounded-xl p-2 items-center max-w-[600px] mx-2 sm:p-0 ">
      {children}
    </div>
  );
}
