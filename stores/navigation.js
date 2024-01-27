
export const useNavigationStore = defineStore('navigation', () => {
  const test = ref('test');

  const theme = ref('light')

  const  getTheme =()=>{
     theme.value = 'light'
  } 


  console.log('theme',theme.value)
  const toggleDarkMode = ()=>{
    if(theme.value =='dark'){
      theme.value = 'light'
    }else{
      theme.value = 'dark'
    }

 
  }


  return {
    test,
    theme,
    toggleDarkMode,
    getTheme
  };
});
