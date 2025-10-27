//dskfojgkf
package dao;
import dto.Farmacos;
import java.util.LinkedList;

public class ListaFarmacos {
    private LinkedList<Farmacos> lista = new LinkedList<>();
    private int apuntador=-1;
    
    
    public void agregar(Farmacos f){
        lista.add(f);
        
        apuntador=lista.size()-1;
    }
    
    public Farmacos getFarmacoActual(){
        return lista.get(apuntador);
    }
    public Farmacos inicio(){
        apuntador=0;
        return lista.getFirst();
    }
    
    public Farmacos ultimo(){
        apuntador=lista.size()-1;
        return lista.getLast();
    }
    
    public Farmacos siguiente(){
        return null;
    }
    
    public Farmacos anterior(){
        if(apuntador>=0){
            apuntador--;
            return lista.get(apuntador);
        }else{
            System.out.println("haz llegado al inicio de la lista");
            return lista.get(apuntador);
        }
    }
    
    public String imprimir(){
        String resultado="";
        for (Farmacos farmacos : lista) {
            resultado+=farmacos.getNombre()+"\n";
        }
        return resultado;
    }
    public static void main(String[] args) {
        Farmacos f1 = new Farmacos();
        f1.setNombre("Paracetamol");
        Farmacos f2 = new Farmacos();
        f2.setNombre("Doloneurobion");
        
        ListaFarmacos l =  new ListaFarmacos();
        l.agregar(f1);
        l.agregar(f2);
        System.out.println("----lista de farmacos----");
        System.out.println(l.imprimir());
        System.out.println("---el anterior al ultimo----");
        
        Farmacos dc = l.anterior();
        System.out.println(dc.getNombre());
    }
}
