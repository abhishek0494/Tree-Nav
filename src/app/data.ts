export var navItems = [
    {
        displayName: 'Google',
        iconName: '<i class="fab fa-google"></i>',
        route: 'google',
        children: [
            {
                displayName: 'Cloud',
                iconName: '<i class="fas fa-cloud"></i>',
                route: 'google/cloud',
                children: [
                    {
                        displayName: 'GCP',
                        iconName: '<i class="fas fa-server"></i>',
                        route: 'google/cloud/gcp',
                        children: []
                    }
                ]
            },
            {
                displayName: 'Services',
                iconName: '<i class="fas fa-users-cog"></i>',
                route: 'google/services',
                children: [
                    {
                        displayName: 'Technologies',
                        iconName: '<i class="fas fa-microchip"></i>',
                        route: 'google/services/technologies',
                        children: [{
                            displayName: 'Angular',
                            iconName: '<i class="fab fa-angular"></i>',
                            route: 'google/services/technologies/angular',
                            children: [
                                //     {
                                //     displayName: 'JS Framework',
                                //     iconName: 'star_rate',
                                //     route: 'google/services/technolgies/angular/js'
                                // },
                                // {
                                //     displayName: 'Material Design',
                                //     iconName: '<i class="fab fa-css3-alt"></i>',
                                //     route: 'google/services/technolgies/angular/design'
                                // }
                            ]
                        },
                        {
                            displayName: '  Go Lang',
                            iconName: 'GO',
                            route: 'google/services/technologies/golang'
                        }]
                    },
                    {
                        displayName: 'Gmail',
                        iconName: '<i class="far fa-envelope"></i>',
                        route: 'google/services/gmail'
                    },
                    {
                        displayName: 'Hangout',
                        iconName: '<i class="fab fa-google-plus-g"></i>',
                        route: 'google/services/hangout'
                    },
                    {
                        displayName: 'Drive',
                        iconName: '<i class="fab fa-google-drive"></i>',
                        route: 'google/services/drive'
                    }
                ]
            },
            {
                displayName: 'Phones',
                iconName: '<i class="fas fa-phone-alt"></i>',
                route: 'google/phones',
                children: [
                    // {
                    //     displayName: 'Google Pixel',
                    //     iconName: 'star_rate',
                    //     route: 'devfestfl/sessions/my-ally-cli',
                    //     children: [{
                    //         displayName: 'Google Pixel 3',
                    //         iconName: 'stay_current_portrait',
                    //         route: 'google/services/phones/pixel'
                    //     },
                    //     {
                    //         displayName: 'Google Pixel 3xl',
                    //         iconName: 'stay_current_portrait',
                    //         route: 'google/services/phones/pixel/xl'
                    //     }
                    //     ]
                    // }
                ]
            }
        ]
    },
    {
        displayName: 'Amazon',
        iconName: '<i class="fab fa-amazon"></i>',
        route: 'amazon',
        children: [
            {
                displayName: 'Cloud',
                iconName: '<i class="fas fa-cloud"></i>',
                route: 'amazon/cloud',
                children: [
                    {
                        displayName: 'AWS',
                        iconName: '<i class="fab fa-aws"></i>',
                        route: 'amazon/cloud/aws',
                    },
                    {
                        displayName: 'S3',
                        iconName: 'storage',
                        route: 'amazon/cloud/s3',
                    }
                ]
            },
            {
                displayName: 'Amazon Pay',
                iconName: '<i class="fab fa-amazon-pay"></i>',
                route: 'amazon/pay',
                children: []
            },
            {
                displayName: 'e-comerce',
                iconName: '<i class="fas fa-shopping-cart"></i>',
                route: 'amazon/ecomerce'
            }
        ]
    },
    {
        displayName: 'Microsoft',
        iconName: '<i class="fab fa-microsoft"></i>',
        route: 'microsoft',
        children: [
            {
                displayName: 'Windows',
                iconName: '<i class="fab fa-windows"></i>',
                route: 'microsoft/windows'
            },
            {
                displayName: 'Azure',
                iconName: '<i class="fas fa-cloud"></i>',
                route: 'microsoft/azure'
            },
            {
                displayName: '  MS Office',
                iconName: '<i class="far fa-file"></i>',
                route: 'microsoft/office',
                children: [
                    {
                        displayName: 'MS Word',
                        iconName: '<i class="far fa-file-word"></i>',
                        route: 'microsoft/office/word'
                    },
                    {
                        displayName: 'MS Excel',
                        iconName: '<i class="far fa-file-excel"></i>',
                        route: 'microsoft/office/excel'
                    },
                    {
                        displayName: 'MS PowerPoint',
                        iconName: '<i class="far fa-file-powerpoint"></i>',
                        route: 'microsoft/office/powerpoint'
                    }
                ]
            }
        ]
    },
    {
        displayName: 'Apple',
        iconName: '<i class="fab fa-apple"></i>',
        route: 'apple',
        children: [
            {
                displayName: 'Macbooks',
                iconName: '<i class="fas fa-laptop-code"></i>',
                route: 'apple/macbooks',
                children: [
                    {
                        displayName: 'Macbook Pro',
                        iconName: 'star_rate',
                        route: 'apple/macbooks/pro',
                        children: []
                    },
                    {
                        displayName: 'Macbook Air',
                        iconName: 'star_rate',
                        route: 'apple/macbooks/air',
                    },
                ]
            },
            {
                displayName: 'Apple Pay',
                iconName: '<i class="fab fa-apple-pay"></i>',
                route: 'apple/pay',
                disabled: true,
                children: []
            },
            {
                displayName: 'Phones and Tablets',
                iconName: '<i class="fas fa-tablet-alt"></i>',
                route: 'apple/phones',
                children: [
                    {
                        displayName: 'I Phone',
                        iconName: '<i class="fas fa-mobile"></i>',
                        route: 'apple/phones/iphones'
                    },
                    {
                        displayName: 'I Pad',
                        iconName: '<i class="fas fa-tablet"></i>',
                        route: 'apple/phones/ipad'
                    }
                ]
            }
        ]
    }
];