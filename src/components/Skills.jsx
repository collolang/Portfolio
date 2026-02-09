export default function Skills() {
const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Java', 'Python']

return (
<section>
<h2>Skills</h2>
<ul>
{skills.map(skill => (
<li key={skill}>{skill}</li>
))}
</ul>
</section>
)
}