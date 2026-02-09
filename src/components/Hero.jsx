import profile from '../assets/profile.jpeg'


export default function Hero() {
return (
<section>
<img src={profile} alt="Profile" />
<div>
<h1>Hello, I'm Collins</h1>
<p>Computer Science student & Web Developer</p>
</div>
</section>
)
}