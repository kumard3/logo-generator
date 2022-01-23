export default function Container({ children }: any) {
  return (
    <div className=" bg-[#1a1a1a]  flex  justify-center rounded-xl p-2 items-center-max w-[600px] ">
      {children}
    </div>
  );
}
