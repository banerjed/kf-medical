import { styled } from '@material-ui/core/styles';

const ToolbarWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '16px',
  flexWrap: 'wrap',

  '& > *': {
    marginBottom: '8px',
    marginRight: '8px',
  },
});

export default ToolbarWrapper;
