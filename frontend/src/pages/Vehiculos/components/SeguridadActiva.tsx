import {  CiEdit } from 'react-icons/ci';
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"


export function DialogDemo() {
    return (

<Dialog>
  <DialogTrigger> <CiEdit/> </DialogTrigger>
   <DialogContent className="bg-white">
    <DialogHeader>
     <DialogTitle className="font-semibold text-xl text-center">Editar seguridad activa</DialogTitle>
      <DialogDescription className="">
        Sistema de frenado<br />
        Sistema de dirección<br />
        Sistema de suspención<br />
        Neumaticos<br />
        Iluminación<br />
        Sistema Eléctrico<br />
        Climatización<br />
        Espejos<br />
        Sistema control estabilidad
     </DialogDescription>
    </DialogHeader>
   <DialogFooter> <Button type="submit" className="bg-blue-600">Enviar</Button>
  </DialogFooter>
 </DialogContent>
</Dialog>

)
}