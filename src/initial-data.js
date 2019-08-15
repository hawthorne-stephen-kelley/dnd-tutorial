const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'Import Dataset' },
        'task-2': { id: 'task-2', content: 'Filter' },
        'task-3': { id: 'task-3', content: 'PureStat Attribution' },
        'task-4': { id: 'task-4', content: 'Regression Attribution' },
        'task-5': { id: 'task-5', content: 'Baseline Attribution' },
        'task-6': { id: 'task-6', content: 'Health Check' },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Components',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4','task-5','task-6'],
        },
        'column-2': {
            id: 'column-2',
            title: 'Workflow',
            taskIds: [],
        },
        'column-3': {
            id: 'column-3',
            title: 'Composite',
            taskIds: [],
        },
    },
    columnOrder: ['column-1','column-2','column-3'],
};

export default initialData;