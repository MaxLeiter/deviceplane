import styled from 'styled-components';
import { space, color, typography, border } from 'styled-system';

const Badge = styled.div`
  color: ${props => props.theme.colors.black};
  text-transform: uppercase;
  ${color} ${space} ${typography} ${border};
  padding: 4px 6px;
`;

Badge.defaultProps = {
  fontSize: 0,
  fontWeight: 2,
  borderRadius: 1,
};

export default Badge;
