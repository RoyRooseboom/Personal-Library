package project.personal.personal_library.rest;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import project.personal.personal_library.domain.Boek;
import project.personal.personal_library.persistance.BoekenService;

@RestController
public class GetBoekenEndPoint
{
    @Autowired
    BoekenService boekenService;

    @CrossOrigin
    @GetMapping("geefAlleBoeken")
    public Iterable<Boek> alleBoeken()
    {
        return boekenService.geefAlleBoeken();
    }
}
