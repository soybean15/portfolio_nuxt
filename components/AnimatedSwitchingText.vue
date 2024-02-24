<template>
    <div class="body">
        <div id=container>
        {{topText}}
        <div id=flip>
            <div v-for="item in items" :key="item">
                <div>{{ item }}</div>
            </div>

        </div>
        {{bottomText}}!
    </div>

    </div>

</template>

<script>
export default {
    props: ['topText', 'bottomText', 'items'],
    setup(props) {


        const items = ref(props.items)

        return { 
            items ,
            
        }


    }

}
</script>

<style scoped>

#container {
    color: #999;
    text-transform: uppercase;
    font-size: 36px;
    font-weight: bold;
   
   
  
   
    display: block;
}

#flip {
    height: 50px;
    overflow: hidden;
}

#flip>div>div {
    color: #fff;
    padding: 4px 12px;
    height: 50px;
    margin-bottom: 45px;
    display: inline-block;
}

#flip div:first-child {
    animation: show 5s linear infinite;
}

#flip div div {
    background: #42c58a;
}

#flip div:first-child div {
    background: #4ec7f3;
}

#flip div:last-child div {
    background: #DC143C;
}

@keyframes show {
    0% {
        margin-top: -270px;
    }

    5% {
        margin-top: -180px;
    }

    33% {
        margin-top: -180px;
    }

    38% {
        margin-top: -90px;
    }

    66% {
        margin-top: -90px;
    }

    71% {
        margin-top: 0px;
    }

    99.99% {
        margin-top: 0px;
    }

    100% {
        margin-top: -270px;
    }
}

p {
    position: fixed;
    width: 100%;
    bottom: 30px;
    font-size: 12px;
    color: #999;
    margin-top: 200px;
}</style>