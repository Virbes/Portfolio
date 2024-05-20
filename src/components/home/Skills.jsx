import laravel from '../../assets/images/icons/laravel.svg';
import codeigniter from '../../assets/images/icons/codeigniter.svg';
import node from '../../assets/images/icons/node.svg';
import postgresql from '../../assets/images/icons/postgresql.svg';
import mysql from '../../assets/images/icons/MySQL.svg';
import mongo from '../../assets/images/icons/mongo.svg';
import php from '../../assets/images/icons/php.svg';
import ts from '../../assets/images/icons/ts.svg';

import html from '../../assets/images/icons/html.svg';
import css from '../../assets/images/icons/css.svg';
import sass from '../../assets/images/icons/sass.svg';
import bootstrap from '../../assets/images/icons/bootstrap.svg';
import tailwind from '../../assets/images/icons/tailwind.svg';
import livewire from '../../assets/images/icons/Livewire.svg';
import js from '../../assets/images/icons/js.svg';
import react from '../../assets/images/icons/react.svg';

import vscode from '../../assets/images/icons/vscode.svg';
import github from '../../assets/images/icons/github.svg';
import git from '../../assets/images/icons/git.svg';
import wordpress from '../../assets/images/icons/wordpress.svg';
import npm from '../../assets/images/icons/npm.svg';


export const Skills = () => {

    const backend = [
        { icon: php, name: 'PHP', bg: 'bg-[#8b5cf626]' },
        { icon: laravel, name: 'Laravel', bg: 'bg-[#dd4b2526]' },
        { icon: ts, name: 'TypeScript', bg: 'bg-[#6fa66026]' },
        { icon: codeigniter, name: 'CodeIgniter', bg: 'bg-[#dd4b2526]' },
        { icon: node, name: 'Node.js', bg: 'bg-[#6fa66026]' },
        { icon: mongo, name: 'MongoDB', bg: 'bg-[#6fa66026]' },
        { icon: postgresql, name: 'PostgreSQL', bg: 'bg-[#007acc26]' },
        { icon: mysql, name: 'MySQL', bg: 'dark:bg-[#ffffff14]' },
    ];

    const frontend = [
        { icon: html, name: 'HTML', bg: '' },
        { icon: css, name: 'CSS', bg: '' },
        { icon: sass, name: 'SASS', bg: '' },
        { icon: bootstrap, name: 'Bootstrap', bg: '' },
        { icon: tailwind, name: 'Tailwind CSS', bg: '' },
        { icon: livewire, name: 'Livewire', bg: '' },
        { icon: js, name: 'JavaScript', bg: 'bg-[#f0db4f26]' },
        { icon: react, name: 'React', bg: 'bg-[#7ee1fc26]' },
    ];

    const tools = [
        { icon: vscode, name: 'VS Code' },
        { icon: git, name: 'Git' },
        { icon: github, name: 'GitHub' },
        { icon: wordpress, name: 'WordPress' },
        { icon: npm, name: 'NPM' }
    ];


    return (
        <div className="container mt-5 mb-5">
            <span className="text-dark">TECNOLOGÍAS</span>

            <hr className="mb-2 mt-2" />


            <div className="mt-5">
                <h3 className="text-dark mb-3">Backend</h3>

                <ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-2">
                    {
                        backend.map((skill, index) => (
                            <li key={index} className="flex rounded-6 bg-light p-4">
                                <span className={`text-sm ${skill.bg}`}>
                                    <img src={skill.icon} alt={skill.name} title={skill.name} width="40px" />
                                </span>
                                <span className="text-sm">{skill.name}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className="mt-5">
                <h3 className="text-dark mb-3">Frontend</h3>

                <div className="grid grid-cols-4 gap-4">
                    {
                        frontend.map((skill, index) => (
                            <div key={index} className="flex rounded-6 bg-light p-4">
                                <span className={`text-sm ${skill.bg}`}>
                                    <img src={skill.icon} alt={skill.name} title={skill.name} width="40px" />
                                </span>
                                <span className="text-sm">{skill.name}</span>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="mt-5">
                <h3 className="text-dark mb-3">Frontend</h3>

                <div className="grid grid-cols-4 gap-4">
                    {
                        tools.map((skill, index) => (
                            <div key={index} className="flex rounded-6 bg-light p-4">
                                <span className={`text-sm ${skill.bg}`}>
                                    <img src={skill.icon} alt={skill.name} title={skill.name} width="40px" />
                                </span>
                                <span className="text-sm">{skill.name}</span>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    );
}
