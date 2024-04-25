// structure.js
import {
    singletonDocumentListItem,
    singletonDocumentListItems,
    filteredDocumentListItems,
} from 'sanity-plugin-singleton-tools';
import { PlugIcon } from '@sanity/icons';

export const structure = (S, context) =>
    S.list()
        .title('Base')
        .items([
            S.divider(),
            ...singletonDocumentListItems({ S, context }),
            S.divider(),
            // Filter singleton documents out of the default S.documentTypeListItems() to prevent them from being rendered as lists or as duplicates
            ...filteredDocumentListItems({ S, context }),
        ])




// export const structure = (S, context) =>
//     S.list()
//         .title('Sanity Love Content')
//         .items([
//             // Create a list item for each singleton document in your schema that links directly to a document view
//             ...singletonDocumentListItems({ S, context }),
//             // Create a list item for a specific singleton
//             singletonDocumentListItem({
//                 S,
//                 context,
//                 // Schema type
//                 type: 'mySingleton',
//                 // Required for showing multiple singletons of the same schema type
//                 title: 'My Singleton',
//                 // Required for showing multiple singletons of the same schema type
//                 id: 'mySingleton',
//                 // Specify a custom icon
//                 icon: PlugIcon,
//             }),
//             S.divider(),
//             // Filter singleton documents out of the default S.documentTypeListItems() to prevent them from being rendered as lists or as duplicates
//             ...filteredDocumentListItems({ S, context }),
//         ]);