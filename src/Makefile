SOURCE_LIST=\
	cppo_version\
	cppo_types\
	cppo_command\
	cppo_lexer\
	cppo_parser\
	cppo_eval\
	cppo_main

CMX_FILES := $(addsuffix .cmx, $(SOURCE_LIST))

OBJECT_FILES := $(CMX_FILES) $(addsuffix .cmi, $(filter-out cppo_main cppo_lexer, $(SOURCE_LIST)))

cppo.exe: $(OBJECT_FILES)
	ocamlopt.opt.exe -o cppo.exe unix.cmxa str.cmxa $(CMX_FILES)

cppo_lexer.ml: cppo_lexer.mll
	ocamllex cppo_lexer.mll

cppo_parser.ml cppo_parser.mli: cppo_parser.mly
	ocamlyacc cppo_parser.mly

clean:
	rm -rf *.cm* *.o cppo.exe cppo_lexer.mli cppo_lexer.ml cppo_parser.ml cppo_parser.mli

%.cmi: %.mli
	ocamlopt.opt.exe  -c $<
%.cmx: %.ml
	ocamlopt.opt.exe  -c $<

-include .depend

ML_SOURCES=$(addsuffix .ml, $(SOURCE_LIST))
MLI_SOURCES=$(addsuffix .mli, $(SOURCE_LIST))

depend:
	ocamldep -native $(ML_SOURCES) $(MLI_SOURCES) >.depend