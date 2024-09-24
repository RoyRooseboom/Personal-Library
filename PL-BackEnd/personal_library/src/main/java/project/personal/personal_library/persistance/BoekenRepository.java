package project.personal.personal_library.persistance;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;
import project.personal.personal_library.domain.Boek;

@Component
public interface BoekenRepository extends CrudRepository<Boek, Long>
{}
