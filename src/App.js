
function App() {
  return (
    <Sidebar>
  <Menu
    menuItemStyles={{
      button: ({ level, active, disabled }) => {
       
        if (level === 0)
          return {
            color: disabled ? '#f5d9ff' : '#d359ff',
            backgroundColor: active ? '#eecef9' : undefined,
          };
      },
    }}
  >
    <MenuItem> Inbox </MenuItem>
    <MenuItem> Calendar </MenuItem>

    
  </Menu>
</Sidebar>
  );
}

export default App;
