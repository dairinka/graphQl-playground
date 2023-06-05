import { toast } from 'react-toastify';

const notifyUser = (err: string) => toast.error(err, { position: 'top-right' });

export default notifyUser;
