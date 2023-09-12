import '../styles/Card.css';

export default function Card({ id, title, subtitle, body }) {
	return (
		<a className="card" href={'/recipes/' + id}>
		<div>
		  <h2>{title}</h2>
		  <h5>{subtitle}</h5>
		  {body && <p>{body}</p>}
		</div>
	  </a>
	);
}