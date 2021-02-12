import Link from "next/link";

export default function Navigation()
{
  return(
    <nav><ul>
      <Link href="/"><li>Home</li></Link>
      <Link href="/countries"><li>Countries</li></Link>
      <Link href="/"><li>About</li></Link>
    </ul></nav>
  );
}
