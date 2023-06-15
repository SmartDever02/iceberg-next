export default function PageHeading({ children }: { children: string }) {
  return <h1 className='text-3xl text-center mt-10 font-bold'>{children}</h1>;
}
