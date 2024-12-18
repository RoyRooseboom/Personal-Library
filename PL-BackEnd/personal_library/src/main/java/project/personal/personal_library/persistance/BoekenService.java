package project.personal.personal_library.persistance;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.personal.personal_library.domain.Boek;

@Service
public class BoekenService
{
    @Autowired
    BoekenRepository boekenRepository;

    public Iterable<Boek> geefAlleBoeken()
    {
        return boekenRepository.findAll();
    }

    public void addBoek(Boek b)
    {
        boekenRepository.save(b);
    }

    public void deleteBoek(long id)
    {
        boekenRepository.deleteById(id);
    }
}
