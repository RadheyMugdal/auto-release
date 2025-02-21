export default function Home() {
  return (
    <div className=" w-screen h-screen bg-black flex items-center justify-center ">
      <h1 className=" text-white text-2xl font-bold">Landing page</h1>
      <div>
        <button type="button" className=" bg-white p-3 rounded-md text-black">
          Click here
        </button>
      </div>
      <p>Changes without changelog</p>
    </div>
  );
}
