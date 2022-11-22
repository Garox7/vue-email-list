new Vue ({
    el: '#app',
    data: {
        mailList: [],
    },

    methods: {
        getEmailList() {
            this.mailList = [];
            
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(axiosResponse => {
                    console.log(axiosResponse)
                    this.mailList.push(axiosResponse.data.response);
                })
            }
        }
    }
});


