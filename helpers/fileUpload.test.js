/* eslint-disable no-undef */
import { v2 as cloudinary } from 'cloudinary'
import { fileUpload } from "../../src/helpers/fileUpload"

cloudinary.config({
    cloud_name:'rdlm',
    api_key:'324578764543611',
    api_secret: 'CxD3My3yI4_3s9BV_fx4bmV5m-M',
    secure: true
})

describe('Purebas en fileUpload', () => { 
  
    test('debe de subir el archivo correctamente a cloudinary', async() => { 
        
        const imgUrl = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80';
        const resp = await fetch( imgUrl );
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');

        const url = await fileUpload( file );
        expect( typeof url ).toBe('string');

        const segments = url.split('/');
        const imageId = segments[ segments.length - 1 ].replace('.jpg', '');
        const cloudResp = await cloudinary.api.delete_resources([ 'journal-app/' + imageId ], {
            resource_type: 'image'
        });
        console.log(cloudResp);

    })

    test('debe de retornar undefined', async() => { 
        
        const file = new File([], 'foto.jpg');
        const url = await fileUpload( file );
        expect( url ).toBe( undefined );

    })
})