
import { Container, NameSection } from "./SectionTitle.styled";
    

export const SectionTitle = ({ title, children }) => {
	return (
    <Container className='section'>
      <NameSection>{title}</NameSection>
			{children}
		</Container>
	);
};

