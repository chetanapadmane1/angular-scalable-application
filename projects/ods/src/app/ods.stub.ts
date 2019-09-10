export const ods = {
    menu: [
        { title: 'Dashboard', url: 'dashboard' },
        { title: 'Storage', url: 'storage' }
    ],
    storage: {
        storageData: [
            {
                title: 'Storage 1',
                size: '100GB',
                memoryType: 'HDD',
                volume: [
                    { title: 's1 Volume 1', size: '10GB' },
                    { title: 's1 Volume 2', size: '20GB' },
                    { title: 's1 Volume 3', size: '50GB' }
                ]
            },
            {
                title: 'Storage 2',
                size: '1TB',
                memoryType: 'SDD',
                volume: [
                    { title: 's2 Volume 1', size: '100GB' },
                    { title: 's2 Volume 2', size: '250GB' },
                    { title: 's2 Volume 3', size: '500GB' }
                ]
            },
            {
                title: 'Storage 3',
                size: '500GB',
                memoryType: 'HDD',
                volume: [
                    { title: 's3 Volume 1', size: '100GB' },
                    { title: 's3 Volume 2', size: '250GB' },
                    { title: 's3 Volume 3', size: '500GB' }
                ]
            }
        ],
        storageHeading: ['Title', 'Size', 'Memory Type'],
        visibleColumns: ['title', 'size', 'memoryType'],
    },
    volumeHeading: ['Title', 'Size']
};
