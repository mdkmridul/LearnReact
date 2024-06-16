export default function TabButton({ children, onSelect, isSelected }) {
  console.log('tabCOmponent')
	return (
    <li>
      <button className={isSelected ? 'active' : null} onClick={onSelect}>{children}</button>
    </li>
  );
}
