const ListItem = (props) => {
  return props.concepts.map((concept, i) => (
    <li key={i} className="concept">
      <img src={concept.image} alt={concept.title} />
      <h2>{concept.title}</h2>
      <p>{concept.description}</p>
    </li>
  ));
};

export default ListItem;
