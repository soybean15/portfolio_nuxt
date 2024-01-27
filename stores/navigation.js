import { getData, setData } from 'nuxt-storage/local-storage';
export const useNavigationStore = defineStore('navigation', () => {
  const test = ref('test');

  const theme = ref('light')

  const  getTheme =async()=>{
     theme.value = await getData('theme')==null ? 'light' :getData('theme')
  } 

  console.log('getData',getData('theme'))
  console.log('theme',theme.value)
  const toggleDarkMode = ()=>{
    if(theme.value =='dark'){
      theme.value = 'light'
    }else{
      theme.value = 'dark'
    }

   setData('theme',theme.value)
   
  }


  return {
    test,
    theme,
    toggleDarkMode,
    getTheme
  };
});
