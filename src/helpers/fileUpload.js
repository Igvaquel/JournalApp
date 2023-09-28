

export const fileUpload = async( file ) => {

    if( !file ) throw new Error('There is no file to upload')

    const cloudUrl = 'https://api.cloudinary.com/v1_1/rdlm/upload';

    const formData = new FormData();

    formData.append('upload_preset','react-journal');
    formData.append('file', file);

    try {
        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        })

        if( !resp ) throw new Error('Unable to upload image');

        const cloudResp = await resp.json();

        return cloudResp.secure_url;
        
    } catch (error) {
        console.log(error);
        throw new Error( error.message )
    }

}