import { Component } from '@angular/core'; 
import { Producto } from '../../models/producto';
import { ProductoCard } from '../../components/producto-card/producto-card';

@Component({
  imports: [ProductoCard],
  selector: 'app-productos',
  styleUrl: './productos.css',
  templateUrl: './productos.html',
})
export class Productos {

productos : Producto[] = [
 { id:1, titulo:'Bariloche', descripcion: 'Lagos, montañas y senderos para disfrutar de la naturaleza patagónica.', url:'https://www.infoturchubut.ar/wp-content/uploads/2025/02/Bariloche-de-finde-largo.webp', mapsUrl:'https://maps.app.goo.gl/VNkpUgsCB2zdkCai6' },

 { id:2, titulo:'Las Grutas', descripcion:'Playas, acantilados y paseos para descubrir la belleza del mar argentino.' , url:'https://billiken.lat/wp-content/uploads/2022/02/Playa-de-Las-Grutas-Argentina-1280x720-1.jpeg', mapsUrl:'https://maps.app.goo.gl/HE3a2QLdSoho2TZNA' },

 { id:3, titulo:'El Bolsón', descripcion:'Bosques, montañas, ferias artesanales y caminos para explorar.' , url:'https://www.maladeaventuras.com/wp-content/uploads/2024/08/Trilha-Cajon-del-Azul-19-1024x768.jpg', mapsUrl:'https://maps.app.goo.gl/eD2tzQndaCCwisWu5'},

 { id:4, titulo:'Puerto San Antonio Este', descripcion:'los planes giran en torno a sus playas tranquilas, los deportes acuáticos en aguas protegidas, el contacto con la fauna marina y la gastronomía pesquera.' , url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE8glC2OvIGhoXk-aztqDUjUzpINjQuVc5n3kMVvfk7GRwb4fpb1VqI_o&s=10', mapsUrl:'https://www.google.com/maps/search/?api=1&query=Puerto+San+Antonio+Este+Rio+Negro+Argentina'},
];
}
