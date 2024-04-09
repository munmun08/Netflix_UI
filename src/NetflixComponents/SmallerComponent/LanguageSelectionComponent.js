
import './LanguageSelectionComponent.css';

export default function LanguageSelectionComponent() {
    return (
        <select className="form-select language-select">
            <option lang="en" label="English" value="en-IN">English</option>
            <option lang="hi" label="Hindi" value="hi-IN">Hindi</option>
        </select>
    );
}
