export default function createDecorators(models) {
    return {
        model: (data) => {
            return (a) => {
                console.log(data);
                models.update((m) => {
                    m[data.name] = {
                        ...data,
                        properties: [],
                        handle: a
                    };
                    return m;
                });
            };
        },
        field: (data) => {
            return (a, name, index) => {
                console.log({
                    decs: {
                        a, name, index,
                    },
                });
            };
        }
    };
}
