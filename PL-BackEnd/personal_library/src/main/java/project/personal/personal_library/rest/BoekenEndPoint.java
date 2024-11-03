package project.personal.personal_library.rest;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import project.personal.personal_library.domain.Boek;
import project.personal.personal_library.persistance.BoekenService;

@RestController
public class BoekenEndPoint
{
    @Autowired
    BoekenService boekenService;

    @CrossOrigin
    @GetMapping("geefAlleBoeken")
    public Iterable<Boek> alleBoeken()
    {
        return boekenService.geefAlleBoeken();
    }

    @CrossOrigin
    @PostMapping("addBook")
    public void addBook(@RequestBody Boek b)
    {
        boekenService.addBoek(b);
    }

    @CrossOrigin
    @DeleteMapping("deleteBook")
    public void deleteBook(@RequestBody int[] id)
    {
        for(int i : id)
        {
            boekenService.deleteBoek(i);
        }
    }
}
